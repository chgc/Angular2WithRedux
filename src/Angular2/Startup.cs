using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNet.Http;
using System.IO;

namespace Angular2
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseIISPlatformHandler();            
            app.UseStaticFiles();
            app.Use(async (context, next) =>
            {
                // 判斷request如果不是api call時，則要讀取index.html
                if (!Path.HasExtension(context.Request.Path.Value) 
                    && context.Request.HttpContext.Request.Headers["X-Custom-Header"] != "api"
                    && context.Request.HttpContext.Request.Headers["X-Requested-With"] != "XMLHttpRequest")
                {
                    await context.Response.WriteAsync(System.IO.File.ReadAllText("index.html"));
                }
                await next();
            });

            app.UseMvc();

        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}

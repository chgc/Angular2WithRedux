using System;

namespace Angular2.Model
{
    public class Todo{
        public Guid id { get; set; } = Guid.NewGuid();
        public string content{ get; set; }
        public bool complete { get; set; } = false;
    }
}
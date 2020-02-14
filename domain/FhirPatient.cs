using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.domain
{
    public class FhirPatient
    {
        public List<FhirIdentification> Identification { get; set; }
        public List<FhirHumanName> Name { get; set; }
        public DateTime? BirthDate { get; set; }
        public bool Active { get; set; }
        public int Source { get; set; }
    }
}

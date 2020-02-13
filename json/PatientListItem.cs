using fhirbrowser.domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.json
{
    public class PatientListItem
    {
        public long Id { get; set; }
        public int Source { get; set; }
        public bool Active { get; set; }
        public List<FhirIdentification> Identification { get; set; }
        public List<FhirHumanName> Name { get; set; }
        public DateTime? BirthDate { get; set; }
    }
}

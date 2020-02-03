using System.Collections.Generic;
using System.Linq;
using DataModels;
using fhirbrowser.data;
using fhirbrowser.json;
using Microsoft.AspNetCore.Mvc;

namespace fhirbrowser.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FhirResourcesController : ControllerBase
    {
        private UnitOfWork _uow;

        public FhirResourcesController(UnitOfWork uow) : base() {
            _uow = uow;
        }

        // GET: api/FhirResources
        [HttpGet]
        [Produces("application/json")]
        public FhirResource[] Get()
        {
            var resources = new List<FhirResource>();

            if (_uow.Patients != null)
            {
                resources.Add(new FhirResource { Name = "Patient", Count = _uow.Patients.Count });
            };

            if (_uow.Practitioners != null)
            {
                resources.Add(new FhirResource { Name = "Practitioner", Count = _uow.Practitioners.Count });
            };

            if (_uow.PractitionerRoles != null)
            {
                resources.Add(new FhirResource { Name = "PractitionerRole", Count = _uow.PractitionerRoles.Count });
            };

            if (_uow.RelatedPeople != null)
            {
                resources.Add(new FhirResource { Name = "RelatedPerson", Count = _uow.RelatedPeople.Count });
            };

            if (_uow.People != null)
            {
                resources.Add(new FhirResource { Name = "Person", Count = _uow.People.Count });
            };

            return new FhirResource[]
            {
                new FhirResource {Name = "Patient", Count = _uow.Patients.Count},
                new FhirResource {Name = "Practitioner", Count = _uow.Practitioners.Count},
                new FhirResource {Name = "PractitionerRole", Count = _uow.PractitionerRoles.Count},
                new FhirResource {Name = "RelatedPerson", Count = _uow.RelatedPeople.Count},
                new FhirResource {Name = "Person", Count = _uow.People.Count},
                new FhirResource {Name = "Organization", Count = _uow.Organizations.Count},
                new FhirResource {Name = "HealthcareService", Count = _uow.HealthcareServices.Count},
                new FhirResource {Name = "Location", Count = _uow.Locations.Count},
                new FhirResource {Name = "Device", Count = _uow.Devices.Count},
                new FhirResource {Name = "Task", Count = _uow.Tasks.Count},
                new FhirResource {Name = "Appointment", Count = _uow.Appointments.Count},
                new FhirResource {Name = "Schedule", Count = _uow.Schedules.Count},
                new FhirResource {Name = "Encounter", Count = _uow.Encounters.Count},
                new FhirResource {Name = "EpisodeOfCare", Count = _uow.EpisodesOfCare.Count},
                new FhirResource {Name = "Flag", Count = _uow.Flags.Count},
            };
        }
    }
}

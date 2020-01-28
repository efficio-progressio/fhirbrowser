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
        // GET: api/FhirResources
        [HttpGet]
        [Produces("application/json")]
        public FhirResource[] Get()
        {
            using var uow = new UnitOfWork();

            return new FhirResource[]
            {
                new FhirResource {Name = "Patient", Count = uow.Patients.Count},
                new FhirResource {Name = "Practitioner", Count = uow.Practitioners.Count},
                new FhirResource {Name = "PractitionerRole", Count = uow.PractitionerRoles.Count},
                new FhirResource {Name = "RelatedPerson", Count = uow.RelatedPeople.Count},
                new FhirResource {Name = "Person", Count = uow.People.Count},
                // new FhirResource {Name = "Group", Count = uow.Groups.Count}, // Not implemented
                new FhirResource {Name = "Organization", Count = uow.Organizations.Count},
                // new FhirResource {Name = "OrganizationAffiliation", Count = uow.OrganizationAffiliations.Count}, // Not implemented
                new FhirResource {Name = "HealthcareService", Count = uow.HealthcareServices.Count},
                // new FhirResource {Name = "Endpoint", Count = uow.Endpoints.Count}, // Not implemented
                new FhirResource {Name = "Location", Count = uow.Locations.Count},
                // new FhirResource {Name = "Substance", Count = uow.Substances.Count},
                // new FhirResource {Name = "BiologicallyDerivedProduct", Count = uow.BiologicallyDerivedProducts.Count},
                new FhirResource {Name = "Device", Count = uow.Devices.Count},
                // new FhirResource {Name = "DeviceMetric", Count = uow.DeviceMetrics.Count},
                new FhirResource {Name = "Task", Count = uow.Tasks.Count},
                new FhirResource {Name = "Appointment", Count = uow.Appointments.Count},
                // new FhirResource {Name = "AppointmentResponse", Count = uow.AppointmentResponses.Count}, // Not implemented
                new FhirResource {Name = "Schedule", Count = uow.Schedules.Count},
                // new FhirResource {Name = "Slot", Count = uow.Slots.Count},
                // new FhirResource {Name = "VerificationResult", Count = uow.VerificationResults.Count},
                new FhirResource {Name = "Encounter", Count = uow.Encounters.Count},
                new FhirResource {Name = "EpisodeOfCare", Count = uow.EpisodesOfCare.Count},
                new FhirResource {Name = "Flag", Count = uow.Flags.Count},
                // new FhirResource {Name = "List", Count = uow.Lists.Count},
                // new FhirResource {Name = "Library", Count = uow.Libraries.Count}
            };
        }
    }
}

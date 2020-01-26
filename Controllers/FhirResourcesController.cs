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
                new FhirResource {Name = "Person", Count = uow.People.Count}
            };
        }
    }
}

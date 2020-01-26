using System.Linq;
using DataModels;
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
            using var db = new FhirDevelopment01DB();
            db.Practitioners.Count();

            return new FhirResource[]
            {
                new FhirResource {Name = "Patient", Count=db.Patients.Count()},
                new FhirResource {Name = "Practitioner", Count=db.Practitioners.Count()}
            };
        }
    }
}

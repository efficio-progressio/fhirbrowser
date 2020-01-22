using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fhirbrowser.json;
using Microsoft.AspNetCore.Http;
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
            return new FhirResource[]
            {
                new FhirResource {Name = "Patient"}
            };
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fhirbrowser.data;
using fhirbrowser.json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace fhirbrowser.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private UnitOfWork _uow;

        public PatientsController(UnitOfWork uow)
        {
            _uow = uow;
        }

        // GET: api/Patients
        [HttpGet]
        public IEnumerable<PatientListItem> Get()
        {
            var patients = _uow.Patients.GetPatients().Select(patient => new PatientListItem
            {
                Source = patient.Source,
                Active = patient.Active,
                Identification = patient.Identification,
                Name = patient.Name,
                BirthDate = patient.BirthDate
            }).ToList();

            return patients;
        }
    }
}

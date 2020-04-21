using System.Linq;
using fhirbrowser.data;
using fhirbrowser.json;
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
        public SearchResult<PatientListItem> Get(int from = 0, int to = 50)
        {
            var count = _uow.Patients.Count;

            var patients = _uow.Patients.GetPatients(from, to)
                .Select(patient => new PatientListItem
                {
                    Source = patient.Source,
                    Active = patient.Active,
                    Identification = patient.Identification,
                    Name = patient.Name,
                    BirthDate = patient.BirthDate
                }).ToList();

            return new SearchResult<PatientListItem>(patients, count);
        }
    }
}

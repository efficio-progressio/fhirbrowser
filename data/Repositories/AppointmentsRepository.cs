using DataModels;
using System.Linq;

namespace fhirbrowser.data.Repositories
{
    public class AppointmentsRepository : IRepository
    {
        private FhirDevelopment01DB _database;

        public AppointmentsRepository(FhirDevelopment01DB database)
        {
            _database = database;
        }

        public int Count => _database.Appointments.Count();
    }
}

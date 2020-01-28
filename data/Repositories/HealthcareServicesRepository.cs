using DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.data.Repositories
{
    public class HealthcareServicesRepository : Repository
    {
        private FhirDevelopment01DB _database;

        public HealthcareServicesRepository(FhirDevelopment01DB database)
        {
            _database = database;
        }

        public int Count => _database.HealthcareServices.Count();
    }
}

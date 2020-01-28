using DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.data.Repositories
{
    public class AppointmentResponsesRepository : Repository
    {
        private FhirDevelopment01DB _database;

        public AppointmentResponsesRepository(FhirDevelopment01DB database)
        {
            _database = database;
        }

        public int Count => throw new NotImplementedException();
    }
}

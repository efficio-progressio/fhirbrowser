using DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.data.Repositories
{
    public class VerificationResultsRepository : Repository
    {
        private FhirDevelopment01DB _database;

        public VerificationResultsRepository(FhirDevelopment01DB database)
        {
            _database = database;
        }

        public int Count => throw new NotImplementedException();
    }
}

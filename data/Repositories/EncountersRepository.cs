using DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.data.Repositories
{
    public class EncountersRepository : IRepository
    {
        private FhirDevelopment01DB _database;

        public EncountersRepository(FhirDevelopment01DB database)
        {
            _database = database;
        }

        public int Count => _database.Encounters.Count();
    }
}

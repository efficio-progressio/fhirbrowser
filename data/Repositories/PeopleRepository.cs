using DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.data.Repositories
{
    public class PeopleRepository : IRepository
    {
        private FhirDevelopment01DB _database;

        public PeopleRepository(FhirDevelopment01DB database)
        {
            _database = database;
        }

        public int Count => _database.People.Count();
    }
}

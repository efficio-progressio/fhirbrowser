using DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.data.Repositories
{
    public class LibrariesRepository : Repository
    {
        private FhirDevelopment01DB _database;

        public LibrariesRepository(FhirDevelopment01DB database)
        {
            _database = database;
        }

        public int Count => throw new NotImplementedException();
    }
}

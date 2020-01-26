﻿using DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.data.Repositories
{
    public class PractitionerRolesRepository : Repository
    {
        private FhirDevelopment01DB _database;

        public PractitionerRolesRepository(FhirDevelopment01DB database)
        {
            _database = database;
        }

        public int Count => _database.PractitionerRoles.Count();
    }
}

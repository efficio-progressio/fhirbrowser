using DataModels;
using fhirbrowser.data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.data
{
    public class UnitOfWork : IDisposable
    {
        public PatientsRepository Patients { get; }
        public PractitionersRepository Practitioners { get; }
        public PractitionerRolesRepository PractitionerRoles { get; }
        public RelatedPeopleRepository RelatedPeople { get; }
        public PeopleRepository People { get; }

        public UnitOfWork()
        {
            var database = new FhirDevelopment01DB();
            Patients = new PatientsRepository(database);
            Practitioners = new PractitionersRepository(database);
            PractitionerRoles = new PractitionerRolesRepository(database);
            RelatedPeople = new RelatedPeopleRepository(database);
            People = new PeopleRepository(database);
        }

        public void Dispose() 
        {
        }
    }
}

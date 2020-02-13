using DataModels;
using fhirbrowser.domain;
using fhirbrowser.json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.data.Repositories
{
    public class PatientsRepository : IRepository
    {
        private FhirDevelopment01DB _database;

        public PatientsRepository(FhirDevelopment01DB database)
        {
            _database = database;
        }

        public List<FhirPatient> GetPatients()
        {
            var patients = _database.Patients.Select(patient => new FhirPatient {
                Identification = new List<FhirIdentification>() { new FhirIdentification {
                    System = "PK",
                    Value = patient.Id.ToString()
                } }.Concat(
                    _database.PatientIdentifierIdentifiers
                        .Where(identifier => identifier.IdPatient == patient.Id)
                        .Join(
                        _database.PatientIdentifiers,
                        patientIdentifierIdentifier => patientIdentifierIdentifier.IdIdentifier,
                        patientIdentifier => patientIdentifier.Id,
                        (patientIdentifierIdentifier, patientIdentifier) => new FhirIdentification { System = patientIdentifier.System, Value = patientIdentifier.Value}
                    
                    )).ToList(),
                Name =
                    _database.PatientNameHumanNames
                        .Where(name => name.IdPatient == patient.Id)
                        .Join(
                        _database.PatientHumanNames,
                        patientNameHumanName => patientNameHumanName.IdHumanName,
                        patientHumanName => patientHumanName.Id,
                        (patientNameHumanName, patientHumanName) => new FhirHumanName { FamilyName = patientHumanName.Family, GivenName = patientHumanName.Given})
                        .ToList()
                        
                    ,
               BirthDate = patient.BirthDate,
                Source = patient.Source,
                Active = patient.Active ?? false
            }).ToList();

            return patients;
        }

        public int Count => _database.Patients.Count();
    }
}

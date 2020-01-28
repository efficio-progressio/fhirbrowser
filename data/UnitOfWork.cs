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
        public GroupsRepository Groups { get; }
        public OrganizationsRepository Organizations { get; }
        public OrganizationAffiliationsRepository OrganizationAffiliations { get; }
        public HealthcareServicesRepository HealthcareServices { get; }
        public EndpointsRepository Endpoints { get; }
        public LocationsRepository Locations { get; }
        public SubstancesRepository Substances { get; }
        public BiologicallyDerivedProductsRepository BiologicallyDerivedProducts { get; }
        public DevicesRepository Devices { get; }
        public DeviceMetricsRepository DeviceMetrics { get; }
        public TasksRepository Tasks { get; }
        public AppointmentsRepository Appointments { get; }
        public AppointmentResponsesRepository AppointmentResponses { get; }
        public SchedulesRepository Schedules { get; }
        public SlotsRepository Slots { get; }
        public VerificationResultsRepository VerificationResults { get; }
        public EncountersRepository Encounters { get; }
        public EpisodesOfCareRepository EpisodesOfCare { get; }
        public FlagsRepository Flags { get; }
        public ListsRepository Lists { get; }
        public LibrariesRepository Libraries { get; }

        public UnitOfWork()
        {
            var database = new FhirDevelopment01DB();
            Patients = new PatientsRepository(database);
            Practitioners = new PractitionersRepository(database);
            PractitionerRoles = new PractitionerRolesRepository(database);
            RelatedPeople = new RelatedPeopleRepository(database);
            People = new PeopleRepository(database);
            Groups = new GroupsRepository(database);
            Organizations = new OrganizationsRepository(database);
            OrganizationAffiliations = new OrganizationAffiliationsRepository(database);
            HealthcareServices = new HealthcareServicesRepository(database);
            Endpoints = new EndpointsRepository(database);
            Locations = new LocationsRepository(database);
            Substances = new SubstancesRepository(database);
            BiologicallyDerivedProducts = new BiologicallyDerivedProductsRepository(database);
            Devices = new DevicesRepository(database);
            DeviceMetrics = new DeviceMetricsRepository(database);
            Tasks = new TasksRepository(database);
            Appointments = new AppointmentsRepository(database);
            AppointmentResponses = new AppointmentResponsesRepository(database);
            Schedules = new SchedulesRepository(database);
            Slots = new SlotsRepository(database);
            VerificationResults = new VerificationResultsRepository(database);
            Encounters = new EncountersRepository(database);
            EpisodesOfCare = new EpisodesOfCareRepository(database);
            Flags = new FlagsRepository(database);
            Lists = new ListsRepository(database);
            Libraries = new LibrariesRepository(database);
        }

        public void Dispose() 
        {
        }
    }
}

using DataModels;
using fhirbrowser.data.Repositories;
using System;

namespace fhirbrowser.data
{
    public class UnitOfWork : IDisposable
    {
        public PatientsRepository Patients { get; }
        public PractitionersRepository Practitioners { get; }
        public PractitionerRolesRepository PractitionerRoles { get; }
        public RelatedPeopleRepository RelatedPeople { get; }
        public PeopleRepository People { get; }
        public OrganizationsRepository Organizations { get; }
        public HealthcareServicesRepository HealthcareServices { get; }
        public LocationsRepository Locations { get; }
        public DevicesRepository Devices { get; }
        public TasksRepository Tasks { get; }
        public AppointmentsRepository Appointments { get; }
        public SchedulesRepository Schedules { get; }
        public EncountersRepository Encounters { get; }
        public EpisodesOfCareRepository EpisodesOfCare { get; }
        public FlagsRepository Flags { get; }

        public UnitOfWork(
            PatientsRepository patients, 
            PractitionersRepository practitioners,
            PractitionerRolesRepository practitionerRoles,
            RelatedPeopleRepository relatedPeople,
            PeopleRepository people,
            OrganizationsRepository organizations,
            HealthcareServicesRepository healthcareServices,
            LocationsRepository locations,
            DevicesRepository devices,
            TasksRepository tasks,
            AppointmentsRepository appointments,
            SchedulesRepository schedules,
            EncountersRepository encounters,
            EpisodesOfCareRepository episodesOfCare,
            FlagsRepository flags
            )
        {
            var database = new FhirDevelopment01DB();
            Patients = patients;
            Practitioners = practitioners;
            PractitionerRoles = practitionerRoles;
            RelatedPeople = relatedPeople;
            People = people;
            Organizations = organizations;
            HealthcareServices = healthcareServices;
            Locations = locations;
            Devices = devices;
            Tasks = tasks;
            Appointments = appointments;
            Schedules = schedules;
            Encounters = encounters;
            EpisodesOfCare = episodesOfCare;
            Flags = flags;
        }

        public void Dispose() 
        {
        }
    }
}

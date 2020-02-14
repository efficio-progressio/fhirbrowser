using LinqToDB.Configuration;
using System.Collections.Generic;
using System.Linq;

namespace fhirbrowser.data
{
    public class ConnectionSettings : ILinqToDBSettings
    {
        public IEnumerable<IDataProviderSettings> DataProviders => Enumerable.Empty<IDataProviderSettings>();

        public string DefaultConfiguration => "SqlServer";
        public string DefaultDataProvider => "SqlServer";

        public IEnumerable<IConnectionStringSettings> ConnectionStrings
        {
            get
            {
                yield return
                    new ConnectionStringSettings
                    {
                        Name = "SqlServer",
                        ProviderName = "SqlServer",
                        ConnectionString = @"Server=.\;Database=FhirDevelopment01;Trusted_Connection=True;Enlist=False"
                    };
            }
        }
    }
}

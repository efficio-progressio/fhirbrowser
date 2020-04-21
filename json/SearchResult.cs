using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fhirbrowser.json
{
    public class SearchResult<T>
    {
        public int NumberOfAvailableItems { get; set; }
        public IEnumerable<T> Items { get; set; }

        public SearchResult(IEnumerable<T> items, int numberOfAvailableItems)
        {
            Items = items;
            NumberOfAvailableItems = numberOfAvailableItems;
        }
    }
}

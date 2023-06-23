using System.ComponentModel.DataAnnotations.Schema;

namespace WorldCities.Data.Models
{
    [Table("Cities")]
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Name_ASCII { get; set; }
        
        [Column(TypeName = "decimal(7, 4)")]
        public decimal Lat { get; set; }
        
        [Column(TypeName = "decimal(7, 4)")]
        public decimal Long { get; set; }

        // Relasi ke Country
        [ForeignKey(nameof(Country))]
        public int CountryId { get; set; }

        public virtual Country Country { get; set; }
    }
}

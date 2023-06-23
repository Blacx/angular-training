using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WorldCities.Data.Models;

namespace WorldCities.Data
{
    public class CountryEntityTypeConfiguration : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> builder)
        {
            builder.ToTable(nameof(Country));
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).IsRequired();
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WorldCities.Data.Models;

namespace WorldCities.Data
{
    public class UserInfoEntityTypeConfiguration : IEntityTypeConfiguration<UserInfo>
    {
        public void Configure(EntityTypeBuilder<UserInfo> builder)
        {
            builder.ToTable(nameof(UserInfo));
            builder.HasKey(x => x.UserId);
            builder.Property(x => x.UserId).IsRequired();
        }
    }
}

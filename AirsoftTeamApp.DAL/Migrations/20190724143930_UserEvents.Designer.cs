﻿// <auto-generated />
using System;
using AirsoftTeamApp.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AirsoftTeamApp.DAL.Migrations
{
    [DbContext(typeof(AirsoftTeamDBContext))]
    [Migration("20190724143930_UserEvents")]
    partial class UserEvents
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AirsoftTeamApp.Core.Entities.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CoordX");

                    b.Property<string>("CoordY");

                    b.Property<DateTime>("Date");

                    b.Property<int>("EventType");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("AirsoftTeamApp.Core.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FirstName");

                    b.Property<bool>("HasCar");

                    b.Property<string>("LastName");

                    b.Property<string>("PhotoLink");

                    b.Property<DateTime>("RegistrationDate");

                    b.Property<int>("Role");

                    b.Property<int>("State");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("AirsoftTeamApp.Core.Entities.UserEvent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("EventId");

                    b.Property<bool>("IsVisited");

                    b.Property<int>("UserId");

                    b.Property<bool>("WillVisit");

                    b.HasKey("Id");

                    b.HasIndex("EventId");

                    b.HasIndex("UserId");

                    b.ToTable("UserEvents");
                });

            modelBuilder.Entity("AirsoftTeamApp.Core.Entities.UserEvent", b =>
                {
                    b.HasOne("AirsoftTeamApp.Core.Entities.Event", "Event")
                        .WithMany("UserEvents")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AirsoftTeamApp.Core.Entities.User", "User")
                        .WithMany("UserEvents")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}

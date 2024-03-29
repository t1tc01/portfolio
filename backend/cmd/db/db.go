package db

import (
	"context"
	"log"

	"entgo.io/ent/dialect"
	"github.com/t1tc01/backend-portfolio/ent"
)

var Client *ent.Client

func ConnectDb() {
	dbcon, err := ent.Open(dialect.Postgres, "postgresql://postgres:postgres@localhost:5432/portfolio_db?sslmode=disable")

	if err != nil {
		log.Fatalf("failed opening connection to postgres: %v", err)
	}

	// Run migration.
	ctx := context.Background()
	err = dbcon.Schema.Create(ctx)

	if err != nil {
		log.Fatalf("Failed creating schema resources: %v", err)
	}

	Client = dbcon
	log.Println("Connect")

}

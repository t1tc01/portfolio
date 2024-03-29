package main

import (
	"log"

	_ "entgo.io/ent/dialect/sql"
	"github.com/gofiber/fiber/v2"
	_ "github.com/lib/pq"
	"github.com/t1tc01/backend-portfolio/cmd/db"
	"github.com/t1tc01/backend-portfolio/router"
)

func main() {
	db.ConnectDb()

	app := fiber.New()

	app.Use(func(c *fiber.Ctx) error {
		c.Set("Access-Control-Allow-Origin", "*")
		c.Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if c.Method() == "OPTIONS" {
			return c.SendStatus(fiber.StatusNoContent)
		}
		return c.Next()
	})

	router.SetRoutes(app)

	log.Fatal(app.Listen(":3000"))
}

package router

import (
	"github.com/gofiber/fiber/v2"
	service "github.com/t1tc01/backend-portfolio/service/submit"
)

func SetRoutes(app *fiber.App) {
	app.Post("/api/submit", func(c *fiber.Ctx) error {
		return service.CreateSubmit(c)
	})
}

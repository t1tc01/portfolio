package service

import (
	"github.com/gofiber/fiber/v2"
	"github.com/t1tc01/backend-portfolio/cmd/db"
	"github.com/t1tc01/backend-portfolio/ent"
)

func CreateSubmit(c *fiber.Ctx) error {
	username := c.FormValue("username")
	email := c.FormValue("email")
	message := c.FormValue("message")
	submit, err := createSubmit(c, username, email, message)

	if err != nil {
		return err
	}

	return c.JSON(submit)

}

func createSubmit(c *fiber.Ctx, username string, email string, message string) (*ent.Submit, error) {
	submit, err := db.Client.Submit.Create().
		SetUsername(username).
		SetEmail(email).
		SetMessage(message).
		Save(c.Context())
	if err != nil {
		return nil, err
	}

	return submit, nil
}

package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

type Submit struct {
	ent.Schema
}

// Fields of the Submit.
func (Submit) Fields() []ent.Field {
	return []ent.Field{
		field.String("username"),
		field.String("email"),
		field.String("message"),
	}
}

// Edges of the Submit.
func (Submit) Edges() []ent.Edge {
	return nil
}

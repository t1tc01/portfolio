// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"github.com/t1tc01/backend-portfolio/ent/submit"
)

// Submit is the model entity for the Submit schema.
type Submit struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"id,omitempty"`
	// Username holds the value of the "username" field.
	Username string `json:"username,omitempty"`
	// Email holds the value of the "email" field.
	Email string `json:"email,omitempty"`
	// Message holds the value of the "message" field.
	Message      string `json:"message,omitempty"`
	selectValues sql.SelectValues
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Submit) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case submit.FieldID:
			values[i] = new(sql.NullInt64)
		case submit.FieldUsername, submit.FieldEmail, submit.FieldMessage:
			values[i] = new(sql.NullString)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Submit fields.
func (s *Submit) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case submit.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			s.ID = int(value.Int64)
		case submit.FieldUsername:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field username", values[i])
			} else if value.Valid {
				s.Username = value.String
			}
		case submit.FieldEmail:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field email", values[i])
			} else if value.Valid {
				s.Email = value.String
			}
		case submit.FieldMessage:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field message", values[i])
			} else if value.Valid {
				s.Message = value.String
			}
		default:
			s.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the Submit.
// This includes values selected through modifiers, order, etc.
func (s *Submit) Value(name string) (ent.Value, error) {
	return s.selectValues.Get(name)
}

// Update returns a builder for updating this Submit.
// Note that you need to call Submit.Unwrap() before calling this method if this Submit
// was returned from a transaction, and the transaction was committed or rolled back.
func (s *Submit) Update() *SubmitUpdateOne {
	return NewSubmitClient(s.config).UpdateOne(s)
}

// Unwrap unwraps the Submit entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (s *Submit) Unwrap() *Submit {
	_tx, ok := s.config.driver.(*txDriver)
	if !ok {
		panic("ent: Submit is not a transactional entity")
	}
	s.config.driver = _tx.drv
	return s
}

// String implements the fmt.Stringer.
func (s *Submit) String() string {
	var builder strings.Builder
	builder.WriteString("Submit(")
	builder.WriteString(fmt.Sprintf("id=%v, ", s.ID))
	builder.WriteString("username=")
	builder.WriteString(s.Username)
	builder.WriteString(", ")
	builder.WriteString("email=")
	builder.WriteString(s.Email)
	builder.WriteString(", ")
	builder.WriteString("message=")
	builder.WriteString(s.Message)
	builder.WriteByte(')')
	return builder.String()
}

// Submits is a parsable slice of Submit.
type Submits []*Submit

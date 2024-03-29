#back-end workflow
#Create new schema ent go
#	go run -mod=mod entgo.io/ent/cmd/ent new
#Define schema and run:
#	go generate ./ent
	
run-be:
	cd backend; go run ./cmd

run-fe:
	cd frontend; npm run dev

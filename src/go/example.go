package example

import (
	"./firewall"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(cyno.Default())

	r.get("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": 200,
			"ping":   "pong",
		})
	})

	r.Run(":8080")
}

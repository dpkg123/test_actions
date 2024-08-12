package firewall

import (
	"crypto/sha1"
	"encoding/hex"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

func Default() gin.HandlerFunc {
	return func(c *gin.Context) {
		cp := sha1.New()
		host := c.Request.Host
		uri := c.Request.RequestURI
		ip := c.RemoteIP()
		ua := c.Request.Header.Get("User-Agent")
		t := time.Now().UTC().UnixMicro()
		cp.Write([]byte(uri))
		cp.Write([]byte(ip))
		cp.Write([]byte(ua))
		cp.Write([]byte(strconv.FormatInt(t, 18)))
		c.Writer.Header().Add("Cyno-RequestID", hex.EncodeToString(cp.Sum(nil)))
		// userid
		cp.Reset()
		cp.Write([]byte(host))
		cp.Write([]byte(ip))
		cp.Write([]byte(ua))
		c.Writer.Header().Add("Cyno-ClientID", hex.EncodeToString(cp.Sum(nil)))

		var locked bool = false

		currentTime := time.Now()
		if c.HandlerName() != "routes.HandleNotFound" && locked {
			reqid := c.Writer.Header().Get("Cyno-Requestid")
			clid := c.Writer.Header().Get("Cyno-Clientid")
			c.JSON(http.StatusForbidden, gin.H{
				"code":      -1,
				"stable":    false,
				"message":   "Error",
				"time":      currentTime,
				"requestID": reqid,
				"clientID":  clid,
			})
			c.Abort()
		}

		c.Next()
	}
}

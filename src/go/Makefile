VERB = @

ifeq ($(VERBOSE),1)
	VERB =
endif

GO_SRCS := $(shell find . -name '*.go')
PORT = 7000

proxy: $(GO_SRCS)
	$(VERB) go build .

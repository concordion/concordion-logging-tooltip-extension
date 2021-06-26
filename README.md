[![Build and Test](https://github.com/concordion/concordion-logging-tooltip-extension/actions/workflows/ci.yml/badge.svg)](https://github.com/concordion/concordion-logging-tooltip-extension/actions/workflows/ci.yml)
[![Maven Central](https://img.shields.io/maven-central/v/org.concordion/concordion-logging-tooltip-extension.svg)](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.concordion%22%20AND%20a%3A%22concordion-logging-tooltip-extension%22)
[![Apache License 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)


This [Concordion](http://www.concordion.org) extension adds logging information unobtrusively to the Concordion output. The logging information is only displayed when hovering over the tooltip.

The [demo project](http://github.com/concordion//concordion-logging-tooltip-extension-demo) demonstrates this extension.

# Introduction

This extension allows us to reveal implementation details in the Concordion output, without obscuring the intent of the specification. For example:

![Logging Tooltip Image](images/LoggingTooltip.png)

Revealing the implementation detail can help to improve the level of trust in the tests, and sometimes highlights redundant steps in the tests. This is discussed further in [this blog entry](http://tutansblog.blogspot.com/2010/09/whats-happening-in-my-acceptance-tests.html).

The extension captures the logging information from java.util.logging.

# Installation
The extension is available from [Maven Central](http://search.maven.org/#artifactdetails%7Corg.concordion%7Cconcordion-logging-tooltip-extension%7C1.1.2%7Cjar).</a>

# Configuration

## Default Configuration

By default, this extension will capture all output from the root logger and disable console logging of the root logger.

To install the extension with default configuration, either annotate the fixture class with:

```java
    @Extensions(LoggingTooltipExtension.class)
```

or set the system property `concordion.extensions` to `org.concordion.ext.LoggingTooltipExtension`.

## Custom Configuration

The extension can be customised to restrict the log output to named loggers, and by logging level. The output of logging to the console can also be enabled.

The easiest way is to use the `@Extension` annotation on a [LoggingTooltipExtension](https://github.com/concordion/concordion-extensions/blob/master/src/main/java/org/concordion/ext/LoggingTooltipExtension.java) instance field within the fixture class. For example:

```java
        String loggers = "carbon.CarbonCalculatorTest, selenium.events";
        @Extension
        public ConcordionExtension extension =
            new LoggingTooltipExtension(loggers, Level.FINE, false);
```

The ability to show/hide the tooltip with a button has also been added (either in Java or JavaScript):

* In Java:
```java
        @Extension
        LoggingTooltipExtension extension = new LoggingTooltipExtension();
        
        // By implementing the TooltipButton interface
        TooltipButton myButton = new ToggleTooltipButton();
        extension.setTooltipButton(myButton);
```

* In JavaScript:
```html
        <!-- By calling the toggleTooltip() function -->
        <input type="button" onclick="toggleTooltip();" value="Toggle tooltip" />
```

## Using other loggers

For those not using java.util.logging, a custom LogMessenger can be provided. See the test class [AlternateLoggingTooltipExtensionFactory](https://github.com/concordion/concordion-extensions/blob/master/src/test/java/spec/concordion/ext/loggingTooltip/AlternateLoggingTooltipExtensionFactory.java) for a basic example.

# Further info

* [Specification](http://concordion.github.io/concordion-logging-tooltip-extension/spec/spec/concordion/ext/loggingTooltip/LoggingTooltip.html)
* [API](http://concordion.github.io/concordion-logging-tooltip-extension/api/index.html)
* [Demo project](http://github.com/concordion/concordion-logging-tooltip-extension-demo)

### Acknowledgements

Thanks to Trent Richardson for the [CSS Tooltip](http://trentrichardson.com/examples/csstooltips/) implementation.

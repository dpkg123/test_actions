/*
 * Generated using https://github.com/Microsoft/bond
*/
package com.microsoft.odsp.mobile;

import com.microsoft.odsp.mobile.MobileEnums.*;
import java.io.IOException;
import java.io.Writer;
import java.util.Date;
import java.util.Map;
import java.util.List;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

/**
 * GENERATED Data contract class TelemetryErrorDetails.
 *
 * "A structure to encapsulate error details for a given event."
 */
public class TelemetryErrorDetails
{
    private String errorDomain;
    
    private String errorClass;
    
    private Integer errorCode;
    
    private String errorMessage;
    
    private String serverErrorCode;
    
    private Integer httpStatusCode;
    
    private String correlationId;
    
    private String urlHost;
    
    /**
     * Creates a new instance of the TelemetryErrorDetails class.
     *
     * @param errorDomain    A string that represents ownership for the error being surfaced.
     * @param errorClass    The classification of this error type. It may be a classname or some other identifying value.
     * @param errorCode    A numeric value assigned to this specific type of error.
     */
    public TelemetryErrorDetails(
            Integer errorCode,
            String errorClass,
            String errorDomain) {
        this.InitializeFields();
        this.errorDomain = errorDomain;
        this.errorClass = errorClass;
        this.errorCode = errorCode;
    }
    
    /**
     * Gets the ErrorDomain property.
     */
    public String getErrorDomain() {
        return this.errorDomain;
    }
    
    /**
     * Sets the ErrorDomain property. "A string that represents ownership for the error being surfaced."
     */
    public void setErrorDomain(String value) {
        this.errorDomain = value;
    }
    
    /**
     * Gets the ErrorClass property.
     */
    public String getErrorClass() {
        return this.errorClass;
    }
    
    /**
     * Sets the ErrorClass property. "The classification of this error type. It may be a classname or some other identifying value."
     */
    public void setErrorClass(String value) {
        this.errorClass = value;
    }
    
    /**
     * Gets the ErrorCode property.
     */
    public Integer getErrorCode() {
        return this.errorCode;
    }
    
    /**
     * Sets the ErrorCode property. "A numeric value assigned to this specific type of error."
     */
    public void setErrorCode(Integer value) {
        this.errorCode = value;
    }
    
    /**
     * Gets the ErrorMessage property.
     */
    public String getErrorMessage() {
        return this.errorMessage;
    }
    
    /**
     * Sets the ErrorMessage property. "Additional error details logged with the error code. Note: this should not include PII or localized error messages."
     */
    public void setErrorMessage(String value) {
        this.errorMessage = value;
    }
    
    /**
     * Gets the ServerErrorCode property.
     */
    public String getServerErrorCode() {
        return this.serverErrorCode;
    }
    
    /**
     * Sets the ServerErrorCode property. "Error code returned by server in the failure response"
     */
    public void setServerErrorCode(String value) {
        this.serverErrorCode = value;
    }
    
    /**
     * Gets the HttpStatusCode property.
     */
    public Integer getHttpStatusCode() {
        return this.httpStatusCode;
    }
    
    /**
     * Sets the HttpStatusCode property. "HTTP status code of the failure response"
     */
    public void setHttpStatusCode(Integer value) {
        this.httpStatusCode = value;
    }
    
    /**
     * Gets the CorrelationId property.
     */
    public String getCorrelationId() {
        return this.correlationId;
    }
    
    /**
     * Sets the CorrelationId property. "Correlation ID returned in the upload failure response. This is needed for server side investigations."
     */
    public void setCorrelationId(String value) {
        this.correlationId = value;
    }
    
    /**
     * Gets the UrlHost property.
     */
    public String getUrlHost() {
        return this.urlHost;
    }
    
    /**
     * Sets the UrlHost property. "URLHost of a tenant or service in the case of server errors. This is needed for server side investigations."
     */
    public void setUrlHost(String value) {
        this.urlHost = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = new HashMap<String, String>();

        if (errorDomain != null) {
            map.put("ErrorDomain", String.valueOf(this.errorDomain));
        }
        
        if (errorClass != null) {
            map.put("ErrorClass", String.valueOf(this.errorClass));
        }
        
        if (errorCode != null) {
            map.put("ErrorCode", String.valueOf(this.errorCode));
        }
        
        if (errorMessage != null) {
            map.put("ErrorMessage", String.valueOf(this.errorMessage));
        }
        
        if (serverErrorCode != null) {
            map.put("ServerErrorCode", String.valueOf(this.serverErrorCode));
        }
        
        if (httpStatusCode != null) {
            map.put("HttpStatusCode", String.valueOf(this.httpStatusCode));
        }
        
        if (correlationId != null) {
            map.put("CorrelationId", String.valueOf(this.correlationId));
        }
        
        if (urlHost != null) {
            map.put("UrlHost", String.valueOf(this.urlHost));
        }
        

        return map;
    }


    /**
     * Returns a set with any required properties having current values set to null
     */
    public Set<String> getEmptyProperties() {
        Set<String> blankProperties = new HashSet<String>();

        if (errorDomain == null) {
            blankProperties.add("errorDomain");
        }
        if (errorClass == null) {
            blankProperties.add("errorClass");
        }
        if (errorCode == null) {
            blankProperties.add("errorCode");
        }
        return blankProperties;
    }

    /**
     * Optionally initializes fields for the current context.
     */
    protected void InitializeFields() {
        
    }

}

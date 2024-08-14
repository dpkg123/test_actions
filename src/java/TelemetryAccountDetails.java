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
 * GENERATED Data contract class TelemetryAccountDetails.
 *
 * "Account details for a Telemetry Event"
 */
public class TelemetryAccountDetails
{
    private AccountType accountType;
    
    private String userId;
    
    private AuthEnvironmentType authEnvironment;
    
    private String tenantId;
    
    private String tenantName;
    
    private BusinessAccountType businessAuthType;
    
    private WorkloadType workload;
    
    private PlaceVersionType placeVersion;
    
    private Boolean isMamEnabled;
    
    private Date loginTimestamp;
    
    private Boolean isConvergedODC;
    
    private String oneDSCollectorUrl;
    
    private String ariaCollectorUrl;
    
    /**
     * Creates a new instance of the TelemetryAccountDetails class.
     *
     * @param accountType    Account type
     * @param authEnvironment    Authentication environment
     * @param isMamEnabled    If MAM is enabled this value should be set accordingly.
     */
    public TelemetryAccountDetails(
            Boolean isMamEnabled,
            AuthEnvironmentType authEnvironment,
            AccountType accountType) {
        this.InitializeFields();
        this.accountType = accountType;
        this.authEnvironment = authEnvironment;
        this.isMamEnabled = isMamEnabled;
    }
    
    /**
     * Gets the AccountType property.
     */
    public AccountType getAccountType() {
        return this.accountType;
    }
    
    /**
     * Sets the AccountType property. "Account type"
     */
    public void setAccountType(AccountType value) {
        this.accountType = value;
    }
    
    /**
     * Gets the UserId property.
     */
    public String getUserId() {
        return this.userId;
    }
    
    /**
     * Sets the UserId property. "The CID for consumer accounts or the AAD ID / OID for business accounts."
     */
    public void setUserId(String value) {
        this.userId = value;
    }
    
    /**
     * Gets the AuthEnvironment property.
     */
    public AuthEnvironmentType getAuthEnvironment() {
        return this.authEnvironment;
    }
    
    /**
     * Sets the AuthEnvironment property. "Authentication environment"
     */
    public void setAuthEnvironment(AuthEnvironmentType value) {
        this.authEnvironment = value;
    }
    
    /**
     * Gets the TenantId property.
     */
    public String getTenantId() {
        return this.tenantId;
    }
    
    /**
     * Sets the TenantId property. "AAD ObjectId"
     */
    public void setTenantId(String value) {
        this.tenantId = value;
    }
    
    /**
     * Gets the TenantName property.
     */
    public String getTenantName() {
        return this.tenantName;
    }
    
    /**
     * Sets the TenantName property. "ADAL response tenant display name"
     */
    public void setTenantName(String value) {
        this.tenantName = value;
    }
    
    /**
     * Gets the BusinessAuthType property.
     */
    public BusinessAccountType getBusinessAuthType() {
        return this.businessAuthType;
    }
    
    /**
     * Sets the BusinessAuthType property. "Business authentication type"
     */
    public void setBusinessAuthType(BusinessAccountType value) {
        this.businessAuthType = value;
    }
    
    /**
     * Gets the Workload property.
     */
    public WorkloadType getWorkload() {
        return this.workload;
    }
    
    /**
     * Sets the Workload property. "Workload of the account session (e.g. ODC, ODB, TeamSite, etc.)"
     */
    public void setWorkload(WorkloadType value) {
        this.workload = value;
    }
    
    /**
     * Gets the PlaceVersion property.
     */
    public PlaceVersionType getPlaceVersion() {
        return this.placeVersion;
    }
    
    /**
     * Sets the PlaceVersion property. "Version of the place for the account session (e.g. ODC, SPO, SP2013, etc.)"
     */
    public void setPlaceVersion(PlaceVersionType value) {
        this.placeVersion = value;
    }
    
    /**
     * Gets the IsMamEnabled property.
     */
    public Boolean getIsMamEnabled() {
        return this.isMamEnabled;
    }
    
    /**
     * Sets the IsMamEnabled property. "If MAM is enabled this value should be set accordingly."
     */
    public void setIsMamEnabled(Boolean value) {
        this.isMamEnabled = value;
    }
    
    /**
     * Gets the LoginTimestamp property.
     */
    public Date getLoginTimestamp() {
        return this.loginTimestamp;
    }
    
    /**
     * Sets the LoginTimestamp property. "The timestamp when this account was last logged in to the app."
     */
    public void setLoginTimestamp(Date value) {
        this.loginTimestamp = value;
    }
    
    /**
     * Gets the IsConvergedODC property.
     */
    public Boolean getIsConvergedODC() {
        return this.isConvergedODC;
    }
    
    /**
     * Sets the IsConvergedODC property. "Flag inicating the account is a converged ODC account(ODC hosted on SPO), also known as COB."
     */
    public void setIsConvergedODC(Boolean value) {
        this.isConvergedODC = value;
    }
    
    /**
     * Gets the OneDSCollectorUrl property.
     */
    public String getOneDSCollectorUrl() {
        return this.oneDSCollectorUrl;
    }
    
    /**
     * Sets the OneDSCollectorUrl property. "OneDS data boundary url for telemetry sent by this account"
     */
    public void setOneDSCollectorUrl(String value) {
        this.oneDSCollectorUrl = value;
    }
    
    /**
     * Gets the AriaCollectorUrl property.
     */
    public String getAriaCollectorUrl() {
        return this.ariaCollectorUrl;
    }
    
    /**
     * Sets the AriaCollectorUrl property. "Aria data boundary url for telemetry sent by this account"
     */
    public void setAriaCollectorUrl(String value) {
        this.ariaCollectorUrl = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = new HashMap<String, String>();

        if (accountType != null) {
            map.put("AccountType", accountType.name());
        }
        
        if (userId != null) {
            map.put("UserId", String.valueOf(this.userId));
        }
        
        if (authEnvironment != null) {
            map.put("AuthEnvironment", authEnvironment.name());
        }
        
        if (tenantId != null) {
            map.put("TenantId", String.valueOf(this.tenantId));
        }
        
        if (tenantName != null) {
            map.put("TenantName", String.valueOf(this.tenantName));
        }
        
        if (businessAuthType != null) {
            map.put("BusinessAuthType", businessAuthType.name());
        }
        
        if (workload != null) {
            map.put("Workload", workload.name());
        }
        
        if (placeVersion != null) {
            map.put("PlaceVersion", placeVersion.name());
        }
        
        if (isMamEnabled != null) {
            map.put("MAMEnabled", String.valueOf(this.isMamEnabled));
        }
        
        if (loginTimestamp != null) {
            map.put("LoginTimestamp", String.valueOf(this.loginTimestamp));
        }
        
        if (isConvergedODC != null) {
            map.put("IsConvergedODC", String.valueOf(this.isConvergedODC));
        }
        
        if (oneDSCollectorUrl != null) {
            map.put("OneDSCollectorUrl", String.valueOf(this.oneDSCollectorUrl));
        }
        
        if (ariaCollectorUrl != null) {
            map.put("AriaCollectorUrl", String.valueOf(this.ariaCollectorUrl));
        }
        

        return map;
    }


    /**
     * Returns a set with any required properties having current values set to null
     */
    public Set<String> getEmptyProperties() {
        Set<String> blankProperties = new HashSet<String>();

        if (accountType == null) {
            blankProperties.add("accountType");
        }
        if (authEnvironment == null) {
            blankProperties.add("authEnvironment");
        }
        if (isMamEnabled == null) {
            blankProperties.add("isMamEnabled");
        }
        return blankProperties;
    }

    /**
     * Optionally initializes fields for the current context.
     */
    protected void InitializeFields() {
        
    }

}

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
 * GENERATED Data contract class AppStateEvent.
 *
 * "An event sent on launch or process start with app state information"
 */
public class AppStateEvent extends TelemetryEvent
{
    private TelemetryEventType eventType = TelemetryEventType.AppLaunch;
    
    private String name = "AppState";
    
    private PrivacyTagType privacyTag = PrivacyTagType.RequiredServiceData;
    
    private PrivacyDataType privacyDataType = PrivacyDataType.ProductAndServiceUsage;
    
    private TelemetryAccountDetails account;
    
    private Boolean sharePointInstalled;
    
    private Double batteryLevel;
    
    private Integer countOneDriveAccounts;
    
    private Integer countBusinessAccounts;
    
    private Integer countOnPremiseAccounts;
    
    private Boolean autoUploadEnabled;
    
    private Boolean autoUploadWhileCharging;
    
    private Boolean autoUploadUseMobileNetwork;
    
    private Boolean autoUploadVideos;
    
    private Map<String, String> rampStates;
    
    private PowerStatusType powerStatus;
    
    private AndroidLaunchDetails launchDetails;
    
    /**
     * Creates a new instance of the AppStateEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param sharePointInstalled    Is the SharePoint app installed?
     * @param countOneDriveAccounts    Count of ODC accounts
     * @param countBusinessAccounts    Count of business accounts
     * @param countOnPremiseAccounts    Count of On Premise business accounts
     * @param autoUploadEnabled    Auto upload is on
     * @param rampStates    Ramp States
     * @param launchDetails    Android specific details for AppStateEvent
     */
    public AppStateEvent(
            AndroidLaunchDetails launchDetails,
            Map<String, String> rampStates,
            Boolean autoUploadEnabled,
            Integer countOnPremiseAccounts,
            Integer countBusinessAccounts,
            Integer countOneDriveAccounts,
            Boolean sharePointInstalled,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(privacyDataType, privacyTag, buildType);
        this.sharePointInstalled = sharePointInstalled;
        this.countOneDriveAccounts = countOneDriveAccounts;
        this.countBusinessAccounts = countBusinessAccounts;
        this.countOnPremiseAccounts = countOnPremiseAccounts;
        this.autoUploadEnabled = autoUploadEnabled;
        this.rampStates = rampStates;
        this.launchDetails = launchDetails;
    }
    
    /**
     * Gets the EventType property.
     */
    @Override
    public TelemetryEventType getEventType() {
        return this.eventType;
    }
    
    /**
     * Gets the Name property.
     */
    @Override
    public String getName() {
        return this.name;
    }
    
    /**
     * Gets the PrivacyTag property.
     */
    @Override
    public PrivacyTagType getPrivacyTag() {
        return this.privacyTag;
    }
    
    /**
     * Sets the PrivacyTag property. "App state events are all required service data."
     */
    public void setPrivacyTag(PrivacyTagType value) {
        this.privacyTag = value;
    }
    
    /**
     * Gets the PrivacyDataType property.
     */
    @Override
    public PrivacyDataType getPrivacyDataType() {
        return this.privacyDataType;
    }
    
    /**
     * Sets the PrivacyDataType property. "App state events are all service usage."
     */
    public void setPrivacyDataType(PrivacyDataType value) {
        this.privacyDataType = value;
    }
    
    /**
     * Gets the Account property.
     */
    public TelemetryAccountDetails getAccount() {
        return this.account;
    }
    
    /**
     * Sets the Account property. "The default, or first, account that will be present when the AppStateEvent occurs, if available"
     */
    public void setAccount(TelemetryAccountDetails value) {
        this.account = value;
    }
    
    /**
     * Gets the SharePointInstalled property.
     */
    public Boolean getSharePointInstalled() {
        return this.sharePointInstalled;
    }
    
    /**
     * Sets the SharePointInstalled property. "Is the SharePoint app installed?"
     */
    public void setSharePointInstalled(Boolean value) {
        this.sharePointInstalled = value;
    }
    
    /**
     * Gets the BatteryLevel property.
     */
    public Double getBatteryLevel() {
        return this.batteryLevel;
    }
    
    /**
     * Sets the BatteryLevel property. "Battery level as percentage 0-100"
     */
    public void setBatteryLevel(Double value) {
        this.batteryLevel = value;
    }
    
    /**
     * Gets the CountOneDriveAccounts property.
     */
    public Integer getCountOneDriveAccounts() {
        return this.countOneDriveAccounts;
    }
    
    /**
     * Sets the CountOneDriveAccounts property. "Count of ODC accounts"
     */
    public void setCountOneDriveAccounts(Integer value) {
        this.countOneDriveAccounts = value;
    }
    
    /**
     * Gets the CountBusinessAccounts property.
     */
    public Integer getCountBusinessAccounts() {
        return this.countBusinessAccounts;
    }
    
    /**
     * Sets the CountBusinessAccounts property. "Count of business accounts"
     */
    public void setCountBusinessAccounts(Integer value) {
        this.countBusinessAccounts = value;
    }
    
    /**
     * Gets the CountOnPremiseAccounts property.
     */
    public Integer getCountOnPremiseAccounts() {
        return this.countOnPremiseAccounts;
    }
    
    /**
     * Sets the CountOnPremiseAccounts property. "Count of On Premise business accounts"
     */
    public void setCountOnPremiseAccounts(Integer value) {
        this.countOnPremiseAccounts = value;
    }
    
    /**
     * Gets the AutoUploadEnabled property.
     */
    public Boolean getAutoUploadEnabled() {
        return this.autoUploadEnabled;
    }
    
    /**
     * Sets the AutoUploadEnabled property. "Auto upload is on"
     */
    public void setAutoUploadEnabled(Boolean value) {
        this.autoUploadEnabled = value;
    }
    
    /**
     * Gets the AutoUploadWhileCharging property.
     */
    public Boolean getAutoUploadWhileCharging() {
        return this.autoUploadWhileCharging;
    }
    
    /**
     * Sets the AutoUploadWhileCharging property. "Auto upload only while charging"
     */
    public void setAutoUploadWhileCharging(Boolean value) {
        this.autoUploadWhileCharging = value;
    }
    
    /**
     * Gets the AutoUploadUseMobileNetwork property.
     */
    public Boolean getAutoUploadUseMobileNetwork() {
        return this.autoUploadUseMobileNetwork;
    }
    
    /**
     * Sets the AutoUploadUseMobileNetwork property. "Auto upload may use mobile network"
     */
    public void setAutoUploadUseMobileNetwork(Boolean value) {
        this.autoUploadUseMobileNetwork = value;
    }
    
    /**
     * Gets the AutoUploadVideos property.
     */
    public Boolean getAutoUploadVideos() {
        return this.autoUploadVideos;
    }
    
    /**
     * Sets the AutoUploadVideos property. "Auto upload videos"
     */
    public void setAutoUploadVideos(Boolean value) {
        this.autoUploadVideos = value;
    }
    
    /**
     * Gets the RampStates property.
     */
    public Map<String, String> getRampStates() {
        if (this.rampStates == null) {
            this.rampStates = new LinkedHashMap<String, String>();
        }
        return this.rampStates;
    }
    
    /**
     * Sets the RampStates property. "Ramp States"
     */
    public void setRampStates(Map<String, String> value) {
        this.rampStates = value;
    }
    
    /**
     * Gets the PowerStatus property.
     */
    public PowerStatusType getPowerStatus() {
        return this.powerStatus;
    }
    
    /**
     * Sets the PowerStatus property. "Battery charging status"
     */
    public void setPowerStatus(PowerStatusType value) {
        this.powerStatus = value;
    }
    
    /**
     * Gets the LaunchDetails property.
     */
    public AndroidLaunchDetails getLaunchDetails() {
        return this.launchDetails;
    }
    
    /**
     * Sets the LaunchDetails property. "Android specific details for AppStateEvent"
     */
    public void setLaunchDetails(AndroidLaunchDetails value) {
        this.launchDetails = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (eventType != null) {
            map.put("EventType", eventType.name());
        }
        
        if (name != null) {
            map.put("Name", String.valueOf(this.name));
        }
        
        if (privacyTag != null) {
            map.put("PrivacyTag", privacyTag.name());
        }
        
        if (privacyDataType != null) {
            map.put("PrivacyDataType", privacyDataType.name());
        }
        
        if (account != null) {
            map.putAll(account.getProperties());
        }
        
        if (sharePointInstalled != null) {
            map.put("SharePointInstalled", String.valueOf(this.sharePointInstalled));
        }
        
        if (batteryLevel != null) {
            map.put("BatteryLevel", String.valueOf(this.batteryLevel));
        }
        
        if (countOneDriveAccounts != null) {
            map.put("CountOneDriveAccounts", String.valueOf(this.countOneDriveAccounts));
        }
        
        if (countBusinessAccounts != null) {
            map.put("CountBusinessAccounts", String.valueOf(this.countBusinessAccounts));
        }
        
        if (countOnPremiseAccounts != null) {
            map.put("CountOnPremiseAccounts", String.valueOf(this.countOnPremiseAccounts));
        }
        
        if (autoUploadEnabled != null) {
            map.put("AutoUploadEnabled", String.valueOf(this.autoUploadEnabled));
        }
        
        if (autoUploadWhileCharging != null) {
            map.put("AutoUploadWhileCharging", String.valueOf(this.autoUploadWhileCharging));
        }
        
        if (autoUploadUseMobileNetwork != null) {
            map.put("AutoUploadUseMobileNetwork", String.valueOf(this.autoUploadUseMobileNetwork));
        }
        
        if (autoUploadVideos != null) {
            map.put("AutoUploadVideos", String.valueOf(this.autoUploadVideos));
        }
        
        if (rampStates != null) {
            for (Map.Entry<?, ?> entry : this.rampStates.entrySet())
                map.put( String.format("%s%s", "RampState_", entry.getKey()), String.valueOf(entry.getValue()));
        }
        
        if (powerStatus != null) {
            map.put("PowerStatus", powerStatus.name());
        }
        
        if (launchDetails != null) {
            map.putAll(launchDetails.getProperties());
        }
        
        map.put( "EventName", this.eventIdentity() );

        return map;
    }


    /**
     * Returns a set with any required properties having current values set to null
     */
    public Set<String> getEmptyProperties() {
        Set<String> blankProperties = new HashSet<String>();
        Set<String> parentBlankProperties = super.getEmptyProperties();

        parentBlankProperties.remove(eventType);
        if (eventType == null) {
            blankProperties.add("eventType");
        }
        parentBlankProperties.remove(name);
        if (name == null) {
            blankProperties.add("name");
        }
        parentBlankProperties.remove(privacyTag);
        if (privacyTag == null) {
            blankProperties.add("privacyTag");
        }
        parentBlankProperties.remove(privacyDataType);
        if (privacyDataType == null) {
            blankProperties.add("privacyDataType");
        }
        if (sharePointInstalled == null) {
            blankProperties.add("sharePointInstalled");
        }
        if (countOneDriveAccounts == null) {
            blankProperties.add("countOneDriveAccounts");
        }
        if (countBusinessAccounts == null) {
            blankProperties.add("countBusinessAccounts");
        }
        if (countOnPremiseAccounts == null) {
            blankProperties.add("countOnPremiseAccounts");
        }
        if (autoUploadEnabled == null) {
            blankProperties.add("autoUploadEnabled");
        }
        if (rampStates == null) {
            blankProperties.add("rampStates");
        }
        if (launchDetails == null) {
            blankProperties.add("launchDetails");
        }
        blankProperties.addAll(parentBlankProperties);
        return blankProperties;
    }


    /**
     * Retrieves the event's proper name
     */
    @Override
    public String eventIdentity() {
        return String.format("%s/%s", String.valueOf(getEventType()), String.valueOf(getName()));
    }

    /**
     * Optionally initializes fields for the current context.
     */
    protected void InitializeFields() {
        
    }

    /**
     * Retrieve the backing table for this event.
     */
    @Override
    public String getTableName() {
        return "usagemobile";
    }
}

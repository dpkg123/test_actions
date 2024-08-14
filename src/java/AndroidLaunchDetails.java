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
 * GENERATED Data contract class AndroidLaunchDetails.
 *
 * "Android specific details for AppStateEvent"
 */
public class AndroidLaunchDetails
{
    private Boolean googlePlayServicesAvailable;
    
    private Boolean shakeToSendFeedback;
    
    private Boolean notificationsBlocked;
    
    private Boolean wearableAppInstalled;
    
    private String preinstallManufacturer;
    
    /**
     * Creates a new instance of the AndroidLaunchDetails class.
     *
     * @param googlePlayServicesAvailable    Google Play services available
     * @param shakeToSendFeedback    Shake to send feedback setting enabled
     * @param notificationsBlocked    Nofications blocked on device for OneDrive app
     * @param wearableAppInstalled    Wearable App installed
     * @param preinstallManufacturer    Preinstall manufacturer
     */
    public AndroidLaunchDetails(
            String preinstallManufacturer,
            Boolean wearableAppInstalled,
            Boolean notificationsBlocked,
            Boolean shakeToSendFeedback,
            Boolean googlePlayServicesAvailable) {
        this.InitializeFields();
        this.googlePlayServicesAvailable = googlePlayServicesAvailable;
        this.shakeToSendFeedback = shakeToSendFeedback;
        this.notificationsBlocked = notificationsBlocked;
        this.wearableAppInstalled = wearableAppInstalled;
        this.preinstallManufacturer = preinstallManufacturer;
    }
    
    /**
     * Gets the GooglePlayServicesAvailable property.
     */
    public Boolean getGooglePlayServicesAvailable() {
        return this.googlePlayServicesAvailable;
    }
    
    /**
     * Sets the GooglePlayServicesAvailable property. "Google Play services available"
     */
    public void setGooglePlayServicesAvailable(Boolean value) {
        this.googlePlayServicesAvailable = value;
    }
    
    /**
     * Gets the ShakeToSendFeedback property.
     */
    public Boolean getShakeToSendFeedback() {
        return this.shakeToSendFeedback;
    }
    
    /**
     * Sets the ShakeToSendFeedback property. "Shake to send feedback setting enabled"
     */
    public void setShakeToSendFeedback(Boolean value) {
        this.shakeToSendFeedback = value;
    }
    
    /**
     * Gets the NotificationsBlocked property.
     */
    public Boolean getNotificationsBlocked() {
        return this.notificationsBlocked;
    }
    
    /**
     * Sets the NotificationsBlocked property. "Nofications blocked on device for OneDrive app"
     */
    public void setNotificationsBlocked(Boolean value) {
        this.notificationsBlocked = value;
    }
    
    /**
     * Gets the WearableAppInstalled property.
     */
    public Boolean getWearableAppInstalled() {
        return this.wearableAppInstalled;
    }
    
    /**
     * Sets the WearableAppInstalled property. "Wearable App installed"
     */
    public void setWearableAppInstalled(Boolean value) {
        this.wearableAppInstalled = value;
    }
    
    /**
     * Gets the PreinstallManufacturer property.
     */
    public String getPreinstallManufacturer() {
        return this.preinstallManufacturer;
    }
    
    /**
     * Sets the PreinstallManufacturer property. "Preinstall manufacturer"
     */
    public void setPreinstallManufacturer(String value) {
        this.preinstallManufacturer = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = new HashMap<String, String>();

        if (googlePlayServicesAvailable != null) {
            map.put("GooglePlayServicesAvailable", String.valueOf(this.googlePlayServicesAvailable));
        }
        
        if (shakeToSendFeedback != null) {
            map.put("ShakeToSendFeedback", String.valueOf(this.shakeToSendFeedback));
        }
        
        if (notificationsBlocked != null) {
            map.put("NotificationsBlocked", String.valueOf(this.notificationsBlocked));
        }
        
        if (wearableAppInstalled != null) {
            map.put("WearableAppInstalled", String.valueOf(this.wearableAppInstalled));
        }
        
        if (preinstallManufacturer != null) {
            map.put("PreinstallManufacturer", String.valueOf(this.preinstallManufacturer));
        }
        

        return map;
    }


    /**
     * Returns a set with any required properties having current values set to null
     */
    public Set<String> getEmptyProperties() {
        Set<String> blankProperties = new HashSet<String>();

        if (googlePlayServicesAvailable == null) {
            blankProperties.add("googlePlayServicesAvailable");
        }
        if (shakeToSendFeedback == null) {
            blankProperties.add("shakeToSendFeedback");
        }
        if (notificationsBlocked == null) {
            blankProperties.add("notificationsBlocked");
        }
        if (wearableAppInstalled == null) {
            blankProperties.add("wearableAppInstalled");
        }
        if (preinstallManufacturer == null) {
            blankProperties.add("preinstallManufacturer");
        }
        return blankProperties;
    }

    /**
     * Optionally initializes fields for the current context.
     */
    protected void InitializeFields() {
        
    }

}

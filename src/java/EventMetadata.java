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
 * GENERATED Data contract class EventMetadata.
 *
 * "A structure to encapsulate event metadata"
 */
public class EventMetadata
{
    private String name;
    
    private PrivacyTagType privacyTag;
    
    private String owner;
    
    /**
     * Creates a new instance of the EventMetadata class.
     *
     * @param name    A string that represents the name of the event.
     * @param privacyTag    Privacy Tag for the event, per Office Privacy Framework guidelines.
     * @param owner    The alias of the engineer who owns this event.
     */
    public EventMetadata(
            String name,
            PrivacyTagType privacyTag,
            String owner) {
        this.InitializeFields();
        this.owner = owner;
        this.privacyTag = privacyTag;
        this.name = name;
    }
    
    /**
     * Gets the Name property.
     */
    public String getName() {
        return this.name;
    }
    
    /**
     * Sets the Name property. "A string that represents the name of the event."
     */
    public void setName(String value) {
        this.name = value;
    }
    
    /**
     * Gets the PrivacyTag property.
     */
    public PrivacyTagType getPrivacyTag() {
        return this.privacyTag;
    }
    
    /**
     * Sets the PrivacyTag property. "Privacy Tag for the event, per Office Privacy Framework guidelines."
     */
    public void setPrivacyTag(PrivacyTagType value) {
        this.privacyTag = value;
    }
    
    /**
     * Gets the Owner property.
     */
    public String getOwner() {
        return this.owner;
    }
    
    /**
     * Sets the Owner property. "The alias of the engineer who owns this event."
     */
    public void setOwner(String value) {
        this.owner = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = new HashMap<String, String>();

        if (name != null) {
            map.put("EventName", String.valueOf(this.name));
        }
        
        if (privacyTag != null) {
            map.put("PrivacyTag", privacyTag.name());
        }
        
        if (owner != null) {
            map.put("Owner", String.valueOf(this.owner));
        }
        

        return map;
    }


    /**
     * Returns a set with any required properties having current values set to null
     */
    public Set<String> getEmptyProperties() {
        Set<String> blankProperties = new HashSet<String>();

        if (name == null) {
            blankProperties.add("name");
        }
        if (privacyTag == null) {
            blankProperties.add("privacyTag");
        }
        if (owner == null) {
            blankProperties.add("owner");
        }
        return blankProperties;
    }

    /**
     * Optionally initializes fields for the current context.
     */
    protected void InitializeFields() {
        
    }

}

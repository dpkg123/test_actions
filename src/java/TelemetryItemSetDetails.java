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
 * GENERATED Data contract class TelemetryItemSetDetails.
 *
 * "Details about a set of OneDrive items"
 */
public class TelemetryItemSetDetails
{
    private ItemType itemType;
    
    private Double count;
    
    private String id;
    
    private Double size;
    
    private String fileExtension;
    
    private Boolean isOffline;
    
    private UserRoleType userRole;
    
    private SharingLevelType sharingLevel;
    
    private String extension;
    
    /**
     * Creates a new instance of the TelemetryItemSetDetails class.
     *
     * @param itemType    Type of all items in set...maybe Mixed
     * @param count    Number of items being acted upon
     */
    public TelemetryItemSetDetails(
            Double count,
            ItemType itemType) {
        this.InitializeFields();
        this.itemType = itemType;
        this.count = count;
    }
    
    /**
     * Gets the ItemType property.
     */
    public ItemType getItemType() {
        return this.itemType;
    }
    
    /**
     * Sets the ItemType property. "Type of all items in set...maybe Mixed"
     */
    public void setItemType(ItemType value) {
        this.itemType = value;
    }
    
    /**
     * Gets the Count property.
     */
    public Double getCount() {
        return this.count;
    }
    
    /**
     * Sets the Count property. "Number of items being acted upon"
     */
    public void setCount(Double value) {
        this.count = value;
    }
    
    /**
     * Gets the Id property.
     */
    public String getId() {
        return this.id;
    }
    
    /**
     * Sets the Id property. "A unique identifier representing the item"
     */
    public void setId(String value) {
        this.id = value;
    }
    
    /**
     * Gets the Size property.
     */
    public Double getSize() {
        return this.size;
    }
    
    /**
     * Sets the Size property. "Item size in bytes"
     */
    public void setSize(Double value) {
        this.size = value;
    }
    
    /**
     * Gets the FileExtension property.
     */
    public String getFileExtension() {
        return this.fileExtension;
    }
    
    /**
     * Sets the FileExtension property. "File extension"
     */
    public void setFileExtension(String value) {
        this.fileExtension = value;
    }
    
    /**
     * Gets the IsOffline property.
     */
    public Boolean getIsOffline() {
        return this.isOffline;
    }
    
    /**
     * Sets the IsOffline property. "Is any item marked offline"
     */
    public void setIsOffline(Boolean value) {
        this.isOffline = value;
    }
    
    /**
     * Gets the UserRole property.
     */
    public UserRoleType getUserRole() {
        return this.userRole;
    }
    
    /**
     * Sets the UserRole property. "User role for first item in set"
     */
    public void setUserRole(UserRoleType value) {
        this.userRole = value;
    }
    
    /**
     * Gets the SharingLevel property.
     */
    public SharingLevelType getSharingLevel() {
        return this.sharingLevel;
    }
    
    /**
     * Sets the SharingLevel property. "Shared status for first item in set"
     */
    public void setSharingLevel(SharingLevelType value) {
        this.sharingLevel = value;
    }
    
    /**
     * Gets the Extension property.
     */
    public String getExtension() {
        return this.extension;
    }
    
    /**
     * Sets the Extension property. "[Deprecated] File extension. Keeping for a transition period to avoid breaking existing reports."
     */
    public void setExtension(String value) {
        this.extension = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = new HashMap<String, String>();

        if (itemType != null) {
            map.put("ItemType", itemType.name());
        }
        
        if (count != null) {
            map.put("Count", String.valueOf(this.count));
        }
        
        if (id != null) {
            map.put("ItemId", String.valueOf(this.id));
        }
        
        if (size != null) {
            map.put("Size", String.valueOf(this.size));
        }
        
        if (fileExtension != null) {
            map.put("FileExtension", String.valueOf(this.fileExtension));
        }
        
        if (isOffline != null) {
            map.put("IsOffline", String.valueOf(this.isOffline));
        }
        
        if (userRole != null) {
            map.put("UserRole", userRole.name());
        }
        
        if (sharingLevel != null) {
            map.put("SharingLevel", sharingLevel.name());
        }
        
        if (extension != null) {
            map.put("Extension", String.valueOf(this.extension));
        }
        

        return map;
    }


    /**
     * Returns a set with any required properties having current values set to null
     */
    public Set<String> getEmptyProperties() {
        Set<String> blankProperties = new HashSet<String>();

        if (itemType == null) {
            blankProperties.add("itemType");
        }
        if (count == null) {
            blankProperties.add("count");
        }
        return blankProperties;
    }

    /**
     * Optionally initializes fields for the current context.
     */
    protected void InitializeFields() {
        
    }

}

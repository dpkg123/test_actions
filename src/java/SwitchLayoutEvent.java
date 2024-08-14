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
 * GENERATED Data contract class SwitchLayoutEvent.
 *
 * "User action change item layout"
 */
public class SwitchLayoutEvent extends ActionEvent
{
    private String name = "SwitchLayout";
    
    private ItemLayoutType itemLayout;
    
    /**
     * Creates a new instance of the SwitchLayoutEvent class.
     *
     * @param buildType    App build type
     * @param privacyTag    Privacy tag as defined by Office Privacy Framework guidelines. Note: not logged in telemetry.
     * @param privacyDataType    Privacy data type defined by telemetry loggers per MOJ Privacy requirements. Note: not logged in telemetry.
     * @param account    The account performing the event
     * @param completionStatus    Did the action complete
     * @param tab    Which pivot was this action called from
     * @param actionEntryPoint    Entry point for Action
     * @param items    Summary of items being acted upon
     * @param itemLayout    Layout type
     */
    public SwitchLayoutEvent(
            ItemLayoutType itemLayout,
            TelemetryItemSetDetails items,
            ActionEntryPointType actionEntryPoint,
            TabViewType tab,
            CompletionType completionStatus,
            TelemetryAccountDetails account,
            PrivacyDataType privacyDataType,
            PrivacyTagType privacyTag,
            BuildType buildType) {
        super(items, actionEntryPoint, tab, completionStatus, account, privacyDataType, privacyTag, buildType);
        this.itemLayout = itemLayout;
    }
    
    /**
     * Gets the Name property.
     */
    @Override
    public String getName() {
        return this.name;
    }
    
    /**
     * Gets the ItemLayout property.
     */
    public ItemLayoutType getItemLayout() {
        return this.itemLayout;
    }
    
    /**
     * Sets the ItemLayout property. "Layout type"
     */
    public void setItemLayout(ItemLayoutType value) {
        this.itemLayout = value;
    }
    

    /**
     * Retrieves the properties as a Map
     */
    public Map<String, String> getProperties() {
        Map<String, String> map = super.getProperties();

        if (name != null) {
            map.put("Name", String.valueOf(this.name));
        }
        
        if (itemLayout != null) {
            map.put("ItemLayout", itemLayout.name());
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

        parentBlankProperties.remove(name);
        if (name == null) {
            blankProperties.add("name");
        }
        if (itemLayout == null) {
            blankProperties.add("itemLayout");
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

}

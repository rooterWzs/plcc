package com.plc.lib.core.driver.plc.siemens;

import com.plc.utils.StringUtils;
import org.apache.plc4x.java.api.PlcConnection;
import org.apache.plc4x.java.api.PlcDriverManager;
import org.apache.plc4x.java.api.messages.PlcReadRequest;
import org.apache.plc4x.java.api.messages.PlcReadResponse;
import org.apache.plc4x.java.api.messages.PlcSubscriptionRequest;
import org.apache.plc4x.java.api.messages.PlcSubscriptionResponse;
import org.apache.plc4x.java.api.model.PlcConsumerRegistration;
import org.apache.plc4x.java.api.types.PlcResponseCode;
import org.apache.plc4x.java.s7.events.S7ModeEvent;
import org.apache.plc4x.java.s7.readwrite.ModeTransitionType;

import java.util.Map;

public class S7Example {

    public static void main1(String[] args) throws Exception {
        try {

            String urlFormat = "s7://127.0.0.1?remote-rack=0&remote-slot=3&controller-type=S7_1200";
            PlcConnection connection = PlcDriverManager.getDefault().getConnectionManager().getConnection(urlFormat);
            if (connection.isConnected()) {

                final PlcReadRequest.Builder readrequest = connection.readRequestBuilder();

                readrequest.addTagAddress("MySZL", "%M100:INT"); //(3.1)

                final PlcReadRequest rr = readrequest.build(); //(3.2)
                final PlcReadResponse szlresponse = rr.execute().get(); //(3.3)
                if (szlresponse.getResponseCode("MySZL") == PlcResponseCode.OK) {//(3.4)
                    System.out.println("MySZL:" + szlresponse.getObject("MySZL"));
                }
            }
        } catch (Exception ex) {

        }


    }


    public static void main(String[] args) throws Exception {
        try {
            String urlFormat = "s7://127.0.0.1?remote-rack=0&remote-slot=3&controller-type=S7_1200";
            PlcConnection connection = PlcDriverManager.getDefault().getConnectionManager().getConnection(urlFormat);
            if (!connection.isConnected()) return;

            PlcReadRequest.Builder readrequest = connection.readRequestBuilder();  //(01)
//            readrequest.addTagAddress("TAG01", "%DB400.DBX0.0:STRING"); //(02)
//            readrequest.addTagAddress("TAG06", "%DB400.DBX470.0:STRING"); //(02)
            readrequest.addTagAddress("TAG02", "%DB1.DBD100:UINT[2]"); //(02)
//            readrequest.addTagAddress("TAG02", "%M100:UINT[2]"); //(02)

            final PlcReadRequest rr = readrequest.build(); //(03)
            final PlcReadResponse response; //(04)
            response = rr.execute().get(); //(05)

            if (response.getResponseCode("TAG02") == PlcResponseCode.OK) { //(06)
//                System.out.println("Value1: " + response.getString("TAG01"));
//                System.out.println("Value2: " + response.getString("TAG06"));
                System.out.println("Value3: " + response.getString("TAG02"));
            } else {
                System.err.println("Problem reading...");
            }
        } catch (Exception ex) { //(07)
            ex.printStackTrace();
            System.err.println("Read: " + ex.getMessage());
        }

    }
}
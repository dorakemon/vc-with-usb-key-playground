"use client";
import { Textarea } from "@/components/UI/textarea";
import { CtapHid } from "@/libs/ctap/CtapHid";
import { FIDOKeyHIDDevice } from "@/libs/ctap/FidoKeyHidDevice";
import { OPENSK_DEVICE_ID, OPENSK_PRODUCT_ID } from "@/libs/ctap/constants";
import { printHex } from "@/libs/ctap/utils";
import { useState } from "react";

const useDeviceConnection = () => {
  const [device, setDevice] = useState<FIDOKeyHIDDevice | null>(null);
  const connectHandler = async () => {
    const devices = await FIDOKeyHIDDevice.listDevices(
      OPENSK_DEVICE_ID,
      OPENSK_PRODUCT_ID,
    );
    if (devices.length === 0) {
      console.error("No device found");
      return;
    }
    const _device = devices[0];
    const fidoKeyHIDDevice = new FIDOKeyHIDDevice(_device);
    await fidoKeyHIDDevice.open();
    console.log("Device info:", fidoKeyHIDDevice.deviceInfo);
    setDevice(fidoKeyHIDDevice);
  };
  return { connectHandler, fidoKeyHIDDevice: device };
};

const BbsDemo = () => {
  const [_deviceInfo, _setDeviceInfo] = useState<string | null>(null);
  const [bbsCommitment, setBbsCommitment] = useState<string | null>(null);
  const [bbsCommitmentBlindFactor, setBbsCommitmentBlindFactor] = useState<
    string | null
  >(null);
  const [bbsProof, setBbsProof] = useState<string | null>(null);

  const { connectHandler, fidoKeyHIDDevice } = useDeviceConnection();

  const bbsCommitmentHandler = async () => {
    try {
      if (!fidoKeyHIDDevice) {
        console.error("Device is not connected");
        return;
      }
      const ctapHid = new CtapHid(fidoKeyHIDDevice);
      await ctapHid.init();

      const bbsCommitment = await ctapHid.bbsCommitment();
      const blindFactor = bbsCommitment["1"];
      const commitment = bbsCommitment["2"];

      console.log(commitment);
      console.log(blindFactor);

      setBbsCommitment(printHex(commitment));
      setBbsCommitmentBlindFactor(printHex(blindFactor));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const bbsProofHandler = async () => {
    try {
      if (!fidoKeyHIDDevice) {
        console.error("Device is not connected");
        return;
      }
      const ctapHid = new CtapHid(fidoKeyHIDDevice);
      await ctapHid.init();

      const _bbsProof = await ctapHid.bbsProof();
      console.log(_bbsProof);
      setBbsProof(printHex(_bbsProof["1"]));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-5 px-4 py-8">
        <h1 className="font-bold text-2xl">BBS on USB Key Demo</h1>
        <button
          onClick={connectHandler}
          className="w-32 rounded bg-lab-blue-500 px-4 py-2 text-white"
          type="button"
        >
          Connect
        </button>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="bbs-commitment" className="font-semibold">
            BBS Commitment
          </label>
          <button
            id="bbs-commitment"
            onClick={bbsCommitmentHandler}
            className="w-48 rounded bg-lab-pink-500 px-4 py-2 text-white"
            type="button"
          >
            BBS Commitment
          </button>
          <div className="w-full">
            <label
              className="mt-2 block font-medium"
              htmlFor="bbs-commitment-commitment"
            >
              Commitment
            </label>
            <Textarea
              id="bbs-commitment-commitment"
              className="w-full resize-none"
              value={bbsCommitment || ""}
              readOnly
            />
            <label
              className="mt-2 block font-medium"
              htmlFor="bbs-commitment-blind-factor"
            >
              Blind Factor
            </label>
            <Textarea
              className="w-full resize-none"
              id="bbs-commitment-blind-factor"
              value={bbsCommitmentBlindFactor || ""}
              readOnly
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <label className="font-semibold" htmlFor="bbs-proof">
            BBS Proof
          </label>
          <button
            onClick={bbsProofHandler}
            className="w-48 rounded bg-lab-pink-500 px-4 py-2 text-white"
            type="button"
          >
            BBS Proof
          </button>
          <Textarea
            className="w-full resize-none"
            value={bbsProof || ""}
            readOnly
          />
        </div>
      </div>
    </main>
  );
};

export default BbsDemo;

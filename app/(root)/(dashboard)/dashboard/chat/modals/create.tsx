"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Plus } from "lucide-react";

export const CreateChannelModal = ({
  isOpen,
  onOpenChange,
  onClose,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark">
      <ModalContent>
        <ModalHeader>Create New Channel</ModalHeader>
        <ModalBody>
          <Input variant="bordered" placeholder="Channel name" />
          <div className="font-semibold pt-2">Who can post?</div>
          <Select
            aria-label="post"
            defaultSelectedKeys={["Member"]}
            labelPlacement="outside"
          >
            <SelectItem key="Admin" className="text-black dark">
              Admins
            </SelectItem>
            <SelectItem key="Member" className="text-black dark">
              Members
            </SelectItem>
          </Select>
          <div className="font-semibold pt-2">Who can view?</div>
          <Select
            aria-label="view"
            defaultSelectedKeys={["Member"]}
            labelPlacement="outside"
          >
            <SelectItem key="Admin" className="text-black dark">
              Admins
            </SelectItem>
            <SelectItem key="Member" className="text-black dark">
              Members
            </SelectItem>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose} radius="full">
            Cancel
          </Button>
          <Button
            variant="ghost"
            color="success"
            startContent={<Plus className="w-4 h-4" />}
            radius="full"
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

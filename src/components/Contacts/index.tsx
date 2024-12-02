import { CV, CVProps } from "@/types";
type ContactsProps = {
  contacts: CVProps["contacts"];
};
export default function Contacts({ contacts }: ContactsProps) {
  return (
    <>
      <h2 className="my-8 text-3xl uppercase border-b border-zinc-800">Contacts</h2>
      {contacts.map((contact) => (
        <div className="my-5" key={contact.label}>
          <h3 className="font-semibold pb-1">{contact.label}</h3>
          <p className="break-words">{contact.value}</p>
        </div>
      ))}
    </>
  );
}

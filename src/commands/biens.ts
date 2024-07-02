import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("biens")
  .setDescription("Liste des biens disponible");

export async function execute(interaction: CommandInteraction) {
  console.log("execute : ", interaction.isRepliable());

  const biens = ["Bien 1", "Bien 2", "Bien 3"];
  let biensStr = "";

  biens.forEach((bien) => {
    biensStr += bien + "\n";
  });

  return interaction.reply(
    "Voici la liste des biens disponible : \n" + biensStr
  );
}

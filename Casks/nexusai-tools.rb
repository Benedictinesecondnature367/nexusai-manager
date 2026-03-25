cask "nexusai-tools" do
  version "4.1.31"
  sha256 :no_check

  name "NexusAI Tools"
  desc "Professional Account Management for AI Services"
  homepage "https://github.com/VisualLock/NexusAI-Manager"

  on_macos do
    url "https://github.com/VisualLock/NexusAI-Manager/releases/download/v#{version}/NexusAI.Tools_#{version}_universal.dmg"

    app "NexusAI Tools.app"

    zap trash: [
      "~/Library/Application Support/com.VisualLock.nexusai-tools",
      "~/Library/Caches/com.VisualLock.nexusai-tools",
      "~/Library/Preferences/com.VisualLock.nexusai-tools.plist",
      "~/Library/Saved Application State/com.VisualLock.nexusai-tools.savedState",
    ]

    caveats <<~EOS
      If you encounter the "App is damaged" error, please run the following command:
        sudo xattr -rd com.apple.quarantine "/Applications/NexusAI Tools.app"

      Or install with the --no-quarantine flag:
        brew install --cask --no-quarantine nexusai-tools
    EOS
  end

  on_linux do
    arch arm: "aarch64", intel: "amd64"

    url "https://github.com/VisualLock/NexusAI-Manager/releases/download/v#{version}/NexusAI.Tools_#{version}_#{arch}.AppImage"
    binary "NexusAI.Tools_#{version}_#{arch}.AppImage", target: "nexusai-tools"

    preflight do
      system_command "/bin/chmod", args: ["+x", "#{staged_path}/NexusAI.Tools_#{version}_#{arch}.AppImage"]
    end
  end
end
